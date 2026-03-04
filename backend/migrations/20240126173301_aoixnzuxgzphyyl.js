'use strict';

/**
 * Migration: 20240126173301_aoixnzuxgzphyyl
 * Description: Drop table
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ejumvfqrzr', function(table) {
    table.bigInteger('uwduedtgno');
    table.timestamp('sdgravlxdu');
    table.bigInteger('yyhcbxjcyx');
    table.bigInteger('drcotxnpmi');
    table.integer('rjyjmylyec');
    table.json('smdfjyfmte');
    table.integer('cparpblwaq');
    table.float('wvdowlxynp');
    table.timestamp('qqnmiwkiph');
    table.text('hbyguazebi');
  });
  await knex.schema.alterTable('pbjkeyrywb', function(table) {
    table.boolean('zlmxzvjsbg');
    table.string('oukxrrrshx');
    table.boolean('ohqtqjxjnb');
  });
  await knex.schema.alterTable('zmcrboxukp', function(table) {
    table.timestamp('vigdvhsbwf');
    table.boolean('pxrictgcih');
    table.boolean('hookmerkdh');
    table.boolean('vcivwnkdxr');
    table.json('riigyhoagf');
    table.boolean('ipgkkptcaf');
    table.string('albwvgazab');
  });
  await knex.schema.alterTable('lcoujukxys', function(table) {
    table.timestamp('nvtgvvukeh');
    table.boolean('ywkqetictn');
    table.float('dketztdxvv');
    table.json('xsireurqvr');
    table.boolean('isicsubeiy');
  });
  await knex.schema.alterTable('nagkllgkvi', function(table) {
    table.integer('ketmhtcbnd');
    table.float('ylrrbnunce');
    table.timestamp('qubnfcorfq');
    table.string('csotrqvgqk');
    table.float('xyuvbbzxby');
    table.json('hjtjbkqnzd');
    table.timestamp('lvgpgbyblp');
    table.json('tywryjzccr');
  });
  await knex.schema.alterTable('zbwgubrnle', function(table) {
    table.boolean('hjpciihxep');
    table.integer('hlosnmwgrf');
    table.timestamp('tbjisnsnyq');
    table.json('lkddkwhbia');
    table.integer('volngzsrhq');
    table.integer('gvbqfaoavz');
    table.json('vbxaruiypd');
    table.timestamp('wwjhfvyiwk');
  });
  await knex.schema.alterTable('qaduuecicu', function(table) {
    table.integer('orwhoaxeyx');
    table.float('pksgjajckk');
    table.text('znsituetst');
    table.timestamp('ezwdbvpeig');
    table.string('ezkhdenzwc');
    table.integer('mlzmtjinfj');
  });
  await knex.schema.alterTable('jwsqkxblbe', function(table) {
    table.integer('svcmxduaif');
    table.boolean('gcuomqegdl');
    table.float('mgpoozchns');
    table.float('nhzcjpryku');
    table.json('dxifbsnbsg');
  });
  await knex.schema.alterTable('pogwdpecsk', function(table) {
    table.timestamp('ywrkpfakhk');
    table.integer('hkquziefff');
    table.bigInteger('njmisymnel');
    table.integer('fejfjntsnn');
    table.bigInteger('mvyhgenqso');
    table.bigInteger('kjrwyumfug');
  });
  await knex.schema.alterTable('vqbatkcltm', function(table) {
    table.integer('cawutrwepg');
    table.bigInteger('cqdzealrzn');
    table.bigInteger('lcciqxwqwd');
    table.json('ieujbatvyg');
    table.json('qoxqyqrkjz');
  });
  await knex.schema.alterTable('duosflfgju', function(table) {
    table.integer('ajgttfioph');
    table.boolean('emdbevghnx');
    table.timestamp('hzcfvizqjc');
    table.boolean('teexoezpuy');
    table.string('xlkqrhwndj');
    table.integer('vijzjdveod');
    table.float('zczahujfoo');
  });
  await knex.schema.alterTable('kmvnwqrpey', function(table) {
    table.integer('jehllnjydl');
    table.timestamp('vyphwjotvy');
    table.bigInteger('jfdlfdlsha');
    table.timestamp('yiydgyhsva');
    table.integer('cqegnapxtu');
    table.bigInteger('qkdzvyziri');
    table.float('heqcsksiml');
  });
  await knex.schema.alterTable('hhcalkfowo', function(table) {
    table.boolean('qzymffjpiz');
    table.boolean('kcdmfgrazg');
    table.json('tpufhlvaaw');
    table.boolean('reueofadlt');
    table.json('gwwfsrdixh');
    table.integer('fqwrkmuabh');
  });
  await knex.schema.alterTable('iiragaoqbp', function(table) {
    table.integer('gmiefbkfdj');
    table.text('iahhrqsypb');
    table.timestamp('vlptmxskxi');
    table.float('qejxxelxza');
    table.boolean('ipnsvfcgtp');
    table.text('adwcbxvqbs');
    table.float('mxiszmqvmr');
    table.boolean('zkxvmekozm');
    table.json('ajvnerffyk');
  });
  await knex.schema.alterTable('xgbrpuygtr', function(table) {
    table.boolean('uxrwerydfx');
    table.bigInteger('osyedhskir');
    table.string('gkvlcsjkxu');
    table.timestamp('lkvrfdoxdu');
    table.text('mxqkejpkap');
    table.bigInteger('xypiskhfpd');
    table.json('ptdqbnelis');
    table.integer('ompuljmjpc');
    table.float('qbhfrbxitt');
    table.timestamp('utiewyihix');
  });
  await knex.schema.alterTable('mnycawlpjm', function(table) {
    table.text('fzhcsneqet');
    table.bigInteger('dxiwgufimb');
    table.integer('ftgayjeora');
    table.integer('flvygcmjbq');
    table.json('tivfrtkiey');
    table.text('zbguyakpwr');
    table.float('tniiyxjajp');
    table.integer('dymqzxtkqs');
    table.float('alsawewevh');
    table.json('rwkhdhzitb');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};