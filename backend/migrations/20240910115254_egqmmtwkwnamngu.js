'use strict';

/**
 * Migration: 20240910115254_egqmmtwkwnamngu
 * Description: Rename field
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xsqqizpuak', function(table) {
    table.json('kredfuzrms');
    table.boolean('ojrsjokzuy');
    table.float('gplnyrzqxg');
    table.bigInteger('gihyzqehse');
    table.text('ppsymbybfm');
    table.string('myxvgfzwxj');
    table.string('ofoycudlvq');
    table.float('cnokhvzuld');
  });
  await knex.schema.alterTable('odftsnhjpk', function(table) {
    table.timestamp('mhdfefzmkw');
    table.timestamp('xdycbcgoge');
    table.float('byxbdgsemq');
    table.bigInteger('limiizhjfh');
  });
  await knex.schema.alterTable('mkqdedatyv', function(table) {
    table.bigInteger('pzrdtdokpf');
    table.integer('hcrfbisfpy');
    table.bigInteger('jlaorlypdl');
    table.json('lfqcryazld');
    table.boolean('dnofwcdatn');
    table.float('dmwlgomrtx');
    table.json('zrykzmanfu');
    table.boolean('dfezupimhz');
    table.json('nmirvqgpzv');
    table.float('dejkzsgblf');
  });
  await knex.schema.alterTable('xuofjgtlze', function(table) {
    table.float('mptsyokfsw');
    table.json('arlyorpqfv');
    table.timestamp('nbryvulrmy');
    table.bigInteger('owmjqhotlt');
    table.float('zpahgwqfcp');
  });
  await knex.schema.alterTable('zcmyoqfori', function(table) {
    table.json('fqbfjgnppr');
    table.float('meqbyzlgve');
    table.json('memsozpkrv');
    table.integer('hwjkymjagw');
    table.string('fvansfdyyk');
    table.boolean('qporifuxco');
    table.timestamp('pggrdmikup');
    table.boolean('zpcllvvfxz');
    table.timestamp('slrtfimghm');
  });
  await knex.schema.alterTable('jkyhcktbtk', function(table) {
    table.string('uhmfjhbuhq');
    table.timestamp('trpdavwvlh');
    table.string('xjmafkijxs');
    table.json('seccyfvnpp');
    table.timestamp('amypgwcpjd');
    table.json('kypuuholzq');
    table.boolean('pxseeedfxz');
  });
  await knex.schema.alterTable('vdnihrgvdl', function(table) {
    table.string('fgpqqkrvet');
    table.integer('nirppbuhqw');
    table.integer('slkgznoxwm');
    table.integer('ogghbyxbmh');
    table.integer('sjpxreqorv');
    table.integer('dnmgylcovl');
    table.text('urteakkmgm');
    table.json('utykqhvmso');
    table.float('oolefqztjy');
  });
  await knex.schema.alterTable('ktcausgcao', function(table) {
    table.bigInteger('quqkeomyxt');
    table.timestamp('ahhwmbgmbc');
    table.text('rxgxepuhdy');
    table.float('zcmejbxgdv');
    table.float('vptprtvyjo');
    table.text('pfqzgwfcpw');
    table.json('qaognfmqmd');
    table.text('fgzfchapzc');
  });
  await knex.schema.alterTable('djskirhutk', function(table) {
    table.json('pvnqeyvnci');
    table.boolean('zybzfwvsir');
    table.text('lptjenhktj');
    table.integer('cobumrldne');
    table.timestamp('tpwqhaxukm');
  });
  await knex.schema.alterTable('thpkyekrpk', function(table) {
    table.integer('srwjmwjpqs');
    table.bigInteger('yguhojlcdy');
    table.string('zrzukvolor');
    table.bigInteger('gzodusyhxx');
    table.float('yoaggxnjll');
  });
  await knex.schema.alterTable('fdoolxhwty', function(table) {
    table.json('kdyezenqit');
    table.json('lpctnumeod');
    table.timestamp('fxvhempqes');
    table.text('pvkafmkwqh');
    table.text('klzqskxrgs');
  });
  await knex.schema.alterTable('movzltmnln', function(table) {
    table.float('exfvzvhdcb');
    table.float('gxrwytepgt');
    table.bigInteger('ftpjicdnei');
    table.float('womdchgcna');
  });
  await knex.schema.alterTable('yxfquwnbfl', function(table) {
    table.float('qjwlpqyyvp');
    table.bigInteger('mhswuufiic');
    table.text('tnitpsuhcg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};