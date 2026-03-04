'use strict';

/**
 * Migration: 20240322182610_bcuztzwmxosygml
 * Description: Please work this time
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('abquxrwpvu', function(table) {
    table.bigInteger('openhzkyuj');
    table.boolean('wrsbydojli');
    table.bigInteger('qtetieuyri');
    table.boolean('kohixejknc');
    table.json('iwbaeeknnr');
    table.string('xwzgyqzcqn');
    table.json('sisrggtsla');
    table.boolean('mrgqimckhv');
  });
  await knex.schema.alterTable('vqvwdogncs', function(table) {
    table.integer('foveoicxks');
    table.float('cxbdlinxkx');
    table.integer('omknpxregs');
    table.text('wkzmwjtqti');
    table.string('kftlfryzkd');
    table.timestamp('xcmmgkyohv');
    table.text('mymldoucyz');
    table.json('fpamewcmde');
  });
  await knex.schema.alterTable('sdoztlytzc', function(table) {
    table.float('rmdvsezccn');
    table.boolean('uyyompcrsq');
    table.json('afkpdqukzn');
    table.timestamp('zpsyfwinqi');
    table.text('psonvvvvwj');
    table.bigInteger('qjxqufxcpo');
    table.integer('rvqkskyqtd');
    table.float('xzefqgozud');
    table.timestamp('zepzhdmgha');
    table.json('xlhjlpggla');
  });
  await knex.schema.alterTable('jdcdpbadli', function(table) {
    table.json('mrtgfttcbi');
    table.text('ezdhaluttv');
    table.bigInteger('xucewricey');
    table.text('kbmnjkwdtw');
    table.string('vjtollawvp');
    table.bigInteger('uczklbooms');
  });
  await knex.schema.alterTable('fzfedqakbz', function(table) {
    table.json('xcgannulla');
    table.timestamp('pfqzouywbw');
    table.integer('osphjnvzke');
    table.float('ekuzadptph');
  });
  await knex.schema.alterTable('dfkssnlfxt', function(table) {
    table.boolean('sxxedlddmq');
    table.float('smityzztmd');
    table.bigInteger('pnmejxyamj');
    table.timestamp('hryzxihoug');
    table.boolean('ziyqueqzxf');
  });
  await knex.schema.alterTable('yjzikqoqya', function(table) {
    table.string('shdzpodscz');
    table.json('ylvrsfgmva');
    table.float('xqgnvfwnec');
    table.text('ztmekafiip');
    table.integer('cwvywhgomo');
    table.text('eugzocirio');
    table.integer('hgruklirvg');
    table.string('hotqfbquim');
    table.string('uxxjydsgxq');
  });
  await knex.schema.alterTable('lwaunwivot', function(table) {
    table.text('xrvqcbefhw');
    table.bigInteger('whgktrvast');
    table.string('ntlpjwpqtw');
    table.float('zhfalrnmel');
    table.integer('mdegcwrhfl');
    table.text('wjdyiuouko');
    table.float('psblxftsdf');
    table.string('leguizlata');
    table.json('xtyputeobr');
  });
  await knex.schema.alterTable('czecofqghy', function(table) {
    table.text('fydxfklada');
    table.boolean('fuyygfknee');
    table.integer('nqcsjbbgjb');
    table.json('izgawsfnjv');
    table.timestamp('uzhcpphnau');
  });
  await knex.schema.alterTable('mksoootfoe', function(table) {
    table.integer('vqziygiuxd');
    table.integer('tmxkfxktte');
    table.timestamp('flhkhbdmcf');
    table.bigInteger('xinfxwkgfo');
  });
  await knex.schema.alterTable('oltzzgevlt', function(table) {
    table.json('mpyxsnueqk');
    table.timestamp('gumlfkmsvj');
    table.string('mjmvrxitei');
    table.string('broqoignld');
    table.float('aarpbiaucw');
    table.boolean('ivunyahhiz');
  });
  await knex.schema.alterTable('wvgvvxdrws', function(table) {
    table.bigInteger('ozlrnfoyye');
    table.integer('vmjjjahdpw');
    table.text('okcexgwukz');
    table.bigInteger('vhvsjxtibt');
  });
  await knex.schema.alterTable('qxxqxpsunx', function(table) {
    table.integer('yyrmcnisor');
    table.json('lsfbiqlkcy');
    table.timestamp('rkqzfkqzez');
    table.float('xqlfzqyxyi');
    table.timestamp('qliggeurli');
    table.timestamp('fmrrqywlzz');
    table.float('xqyvfgxrhz');
  });
  await knex.schema.alterTable('uhiyfjkcxy', function(table) {
    table.text('qkxnciepzf');
    table.string('untimrbsuo');
    table.timestamp('shmrmihzpg');
    table.bigInteger('hnkakclrmy');
    table.text('wytglxcrwf');
    table.bigInteger('ilnxmgpaym');
    table.integer('krvvmlxgij');
  });
  await knex.schema.alterTable('jjmhmosvdx', function(table) {
    table.integer('bagzskevnc');
    table.json('akbdvrylto');
    table.text('zlcloqaseo');
  });
  await knex.schema.alterTable('hicabpizfw', function(table) {
    table.text('rlkszwbhwe');
    table.text('hlnysdtymj');
    table.text('mbtitqvtsx');
    table.float('qvdbuuvzzg');
    table.timestamp('hzylnbblyo');
    table.text('dqqhropaoa');
  });
  await knex.schema.alterTable('lmafjmevrz', function(table) {
    table.json('lrelcmimmq');
    table.float('ovwsvynebz');
    table.timestamp('kjeyruxcnh');
    table.bigInteger('hpknbwulrh');
    table.integer('hckwipxzzn');
    table.integer('iibewsfawx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};