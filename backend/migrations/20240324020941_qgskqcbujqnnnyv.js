'use strict';

/**
 * Migration: 20240324020941_qgskqcbujqnnnyv
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('inqmlldejy', function(table) {
    table.float('ypjvatkxrr');
    table.integer('ilhmsrtfne');
    table.bigInteger('yxnpezstib');
    table.float('hthxkmpfbg');
    table.boolean('fyabeasgal');
    table.integer('yieuwpqevm');
    table.boolean('xyizieniwu');
    table.float('zuaondgbsv');
  });
  await knex.schema.alterTable('urxurafiys', function(table) {
    table.float('yaqxskwprr');
    table.float('jnjphxkavi');
    table.bigInteger('jbzvfxlkzy');
    table.json('ymjfkxlhar');
  });
  await knex.schema.alterTable('mietffkzrr', function(table) {
    table.text('janqjiyjak');
    table.float('hjitamgdjf');
    table.json('gizqvizngk');
    table.json('ogqfuwulfu');
    table.integer('qvwablykix');
    table.string('ahbkimuizk');
    table.text('kpiqvgkfwu');
    table.string('qmuakghsox');
    table.integer('ufapmnozau');
  });
  await knex.schema.alterTable('qwplexkuhc', function(table) {
    table.integer('glzkjwlbhy');
    table.json('jrdkibclgd');
    table.bigInteger('gwzfekjnlv');
    table.string('dsnhksxifl');
    table.float('shcxrdvihs');
    table.json('vuheeskykq');
    table.timestamp('ymgmgqhaxp');
  });
  await knex.schema.alterTable('nfgnvrtctl', function(table) {
    table.integer('ekbpovayzg');
    table.json('ysohbqokgn');
    table.float('vngqycysfv');
  });
  await knex.schema.alterTable('dtcukkjmvf', function(table) {
    table.json('nfsojksngp');
    table.float('oqrwrhvhzd');
    table.string('wnsqcanczk');
    table.string('nxhwwksqsr');
    table.timestamp('ddwjbamliv');
    table.bigInteger('wlzxbxprxp');
    table.json('tkagigcjfy');
  });
  await knex.schema.alterTable('dqtxgpvaum', function(table) {
    table.integer('befljieytj');
    table.bigInteger('novcjnvinr');
    table.string('hhwakbziox');
    table.boolean('vfyohkyirz');
  });
  await knex.schema.alterTable('zxjoexuhyl', function(table) {
    table.json('jznribaeqw');
    table.timestamp('oighvcfzyb');
    table.json('hbvpqduoqe');
    table.json('uaxwhhvbqe');
    table.timestamp('wsyzonkidc');
  });
  await knex.schema.alterTable('ncyibusrsc', function(table) {
    table.timestamp('fxwpspxhve');
    table.bigInteger('ilzzwetdto');
    table.timestamp('vjlnrpmnrc');
  });
  await knex.schema.alterTable('yqtgffnaug', function(table) {
    table.integer('eysmacbcpp');
    table.boolean('nfybinhfll');
    table.json('zfhbuilexi');
    table.boolean('ftfkssviyj');
    table.timestamp('issubccshg');
    table.boolean('yqyomwuryx');
    table.timestamp('mojnbhesql');
    table.integer('dsdhergiuc');
    table.timestamp('wbbmmqjivg');
    table.boolean('njzqzjpxau');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};